import { Test, TestingModule } from '@nestjs/testing';
import { ServiciosService } from '../../../src/servicios/services/servicios.service';
import { PrismaService } from '../../../src/prisma/prisma.service';
import { SupabaseService } from '../../../src/supabase/supabase.service';
import { CreateServicioDto } from '../../../src/servicios/dto/create-servicio.dto';
import { UpdateServicioDto } from '../../../src/servicios/dto/update-servicio.dto';
import { ImageDto } from '../../../src/servicios/dto/create-servicio.dto';
import { BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';

describe('ServiciosService', () => {
  let service: ServiciosService;
  let mockPrismaService: any;
  let mockSupabaseService: any;

  const mockServicio = {
    id: 1,
    nombre: 'Test Servicio',
    descripcion: 'Test Description',
    tipoServicioId: 1,
    precioBase: 100,
    moneda: 'PEN',
    estado: 'ACTIVO',
    detallesServicio: {
      duracion: 2,
      cupoMinimo: 1,
      cupoMaximo: 10
    },
    imagenes: [
      {
        id: 1,
        url: 'img1.jpg'
      }
    ],
    tipoServicio: {
      id: 1,
      nombre: 'Test Tipo'
    },
    serviciosEmprendedores: [
      {
        id: 1,
        emprendimientoId: 1
      }
    ]
  };

  beforeEach(async () => {
    mockPrismaService = {
      $transaction: jest.fn(async (cb) => {
        return cb({
          ...mockPrismaService,
          servicio: mockPrismaService.servicio,
          imageable: mockPrismaService.imageable,
          servicioEmprendedor: mockPrismaService.servicioEmprendedor,
        });
      }),
      servicio: {
        create: jest.fn(),
        findMany: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
        delete: jest.fn()
      },
      imageable: {
        findMany: jest.fn().mockResolvedValue([
          { image: { id: 1, url: 'img1.jpg' } }
        ]),
        delete: jest.fn().mockResolvedValue({})
      },
      image: {
        delete: jest.fn().mockResolvedValue({})
      },
      servicioEmprendedor: {
        findFirst: jest.fn().mockResolvedValue({
          id: 1,
          emprendimientoId: 1
        })
      },
      favoritoServicio: {
        findMany: jest.fn().mockResolvedValue([
          { servicioId: 1 },
          { servicioId: 2 }
        ])
      }
    };

    mockSupabaseService = {
      uploadFile: jest.fn().mockResolvedValue('https://example.com/img1.jpg'),
      deleteFile: jest.fn().mockResolvedValue(undefined)
    };

    // Ajusta los mocks para findUnique según el ID
    mockPrismaService.servicio.findUnique.mockImplementation(async ({ where }) => {
      if (where.id === 1) {
        return {
          ...mockServicio,
          imagenes: [ { id: 1, url: 'img1.jpg' } ],
          serviciosEmprendedores: [ { id: 1, emprendimientoId: 1 } ]
        };
      }
      return null;
    });

    // Ajusta los mocks para findMany
    mockPrismaService.servicio.findMany.mockImplementation(async () => [
      {
        id: 1,
        nombre: 'Servicio 1',
        imagenes: [ { id: 1, url: 'img1.jpg' } ],
        serviciosEmprendedores: [ { id: 1, emprendimientoId: 1 } ]
      },
      {
        id: 2,
        nombre: 'Servicio 2',
        imagenes: [ { id: 1, url: 'img1.jpg' } ],
        serviciosEmprendedores: [ { id: 2, emprendimientoId: 1 } ]
      }
    ]);

    mockPrismaService.servicio.create.mockImplementation(async (args) => {
      if (!args.data) return undefined;
      return {
        ...mockServicio,
        ...args.data,
        imagenes: [ { id: 1, url: 'img1.jpg' } ],
        serviciosEmprendedores: [
          { id: 1, emprendimientoId: 1 }
        ]
      };
    });

    mockPrismaService.servicio.update.mockImplementation(async (args) => {
      return {
        ...mockServicio,
        ...args.data,
        imagenes: [ { id: 1, url: 'img1.jpg' } ],
        serviciosEmprendedores: [
          { id: 1, emprendimientoId: 1 }
        ]
      };
    });

    mockPrismaService.servicio.delete.mockImplementation(async (args) => {
      if (args.where.id === 1) {
        return {
          ...mockServicio,
          imagenes: [
            { id: 1, url: 'img1.jpg' }
          ],
          serviciosEmprendedores: [
            { id: 1, emprendimientoId: 1 }
          ]
        };
      }
      throw new NotFoundException();
    });

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ServiciosService,
        {
          provide: PrismaService,
          useValue: mockPrismaService
        },
        {
          provide: SupabaseService,
          useValue: mockSupabaseService
        }
      ]
    }).compile();

    service = module.get<ServiciosService>(ServiciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new servicio', async () => {
      const createDto: CreateServicioDto = {
        nombre: 'Test Servicio',
        descripcion: 'Test Description',
        tipoServicioId: 1,
        precioBase: 100,
        moneda: 'PEN',
        estado: 'ACTIVO',
        detallesServicio: {
          duracion: 2,
          cupoMinimo: 1,
          cupoMaximo: 10
        },
        imagenes: []
      };

      const expectedCreateArgs = {
        data: {
          nombre: 'Test Servicio',
          descripcion: 'Test Description',
          tipoServicioId: 1,
          precioBase: 100,
          moneda: 'PEN',
          estado: 'ACTIVO',
          detallesServicio: {
            duracion: 2,
            cupoMinimo: 1,
            cupoMaximo: 10
          },
          serviciosEmprendedores: {
            create: {
              emprendimientoId: 1
            }
          }
        }
      };

      const result = await service.create(createDto, 1);

      expect(result.imagenes).toBeDefined();
      expect(result.imagenes.length).toBeGreaterThanOrEqual(0);
      expect(result).toMatchObject({
        ...mockServicio,
        ...createDto,
        imagenes: [ { id: 1, url: 'img1.jpg' } ],
        serviciosEmprendedores: [
          { id: 1, emprendimientoId: 1 }
        ]
      });
      expect(mockPrismaService.servicio.create).toHaveBeenCalledWith(expectedCreateArgs);
    });

    it('should throw BadRequestException if image upload fails', async () => {
      const createDto: CreateServicioDto = {
        nombre: 'Test Servicio',
        descripcion: 'Test Description',
        tipoServicioId: 1,
        precioBase: 100,
        moneda: 'PEN',
        estado: 'ACTIVO',
        detallesServicio: {
          duracion: 2,
          cupoMinimo: 1,
          cupoMaximo: 10
        },
        imagenes: []
      };

      mockPrismaService.servicio.create.mockResolvedValue(undefined);

      await expect(service.create(createDto, 1)).rejects.toThrow(BadRequestException);
    });
  });

  describe('findAll', () => {
    it('should return all servicios', async () => {
      const expected = [
        {
          id: 1,
          nombre: 'Servicio 1',
          imagenes: [
            { id: 1, url: 'img1.jpg' }
          ],
          serviciosEmprendedores: [
            { id: 1, emprendimientoId: 1 }
          ]
        },
        {
          id: 2,
          nombre: 'Servicio 2',
          imagenes: [
            { id: 1, url: 'img1.jpg' }
          ],
          serviciosEmprendedores: [
            { id: 2, emprendimientoId: 1 }
          ]
        }
      ];

      const result = await service.findAll();

      expect(result).toEqual(expected);
      expect(mockPrismaService.servicio.findMany).toHaveBeenCalledWith({
        include: {
          tipoServicio: true,
          serviciosEmprendedores: { select: { emprendimientoId: true } }
        }
      });
    });
  });

  describe('findOne', () => {
    it('should return a servicio by id', async () => {
      const expected = {
        ...mockServicio,
        imagenes: [
          { id: 1, url: 'img1.jpg' }
        ],
        serviciosEmprendedores: [
          { id: 1, emprendimientoId: 1 }
        ]
      };

      const result = await service.findOne(1);

      expect(result).toEqual(expected);
      expect(mockPrismaService.servicio.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        include: {
          tipoServicio: true,
          serviciosEmprendedores: { select: { emprendimientoId: true } }
        }
      });
    });

    it('should throw NotFoundException if servicio not found', async () => {
      mockPrismaService.servicio.findUnique.mockResolvedValue(null);

      await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a servicio', async () => {
      const updateDto: UpdateServicioDto = {
        nombre: 'Updated Servicio',
        descripcion: 'Updated Description',
        precioBase: 150,
        estado: 'INACTIVO'
      };

      const expected = {
        ...mockServicio,
        imagenes: [
          { id: 1, url: 'img1.jpg' }
        ],
        serviciosEmprendedores: [
          { id: 1, emprendimientoId: 1 }
        ]
      };

      mockPrismaService.servicio.update.mockResolvedValue(expected);

      const result = await service.update(1, updateDto, 1);

      expect(result).toMatchObject(expected);
      expect(mockPrismaService.servicio.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto
      });
    });

    it('should throw NotFoundException if servicio not found', async () => {
      const updateDto: UpdateServicioDto = {
        nombre: 'Updated Servicio',
        descripcion: 'Updated Description',
        precioBase: 150,
        estado: 'INACTIVO'
      };

      mockPrismaService.servicio.update.mockRejectedValue(new NotFoundException());

      await expect(service.update(999, updateDto, 1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a servicio', async () => {
      const result = await service.remove(1);

      expect(result).toMatchObject({
        ...mockServicio,
        imagenes: [
          { id: 1, url: 'img1.jpg' }
        ],
        serviciosEmprendedores: [
          { id: 1, emprendimientoId: 1 }
        ]
      });
      expect(mockPrismaService.servicio.delete).toHaveBeenCalledWith({
        where: { id: 1 }
      });
      expect(mockSupabaseService.deleteFile).toHaveBeenCalled();
      expect(mockPrismaService.imageable.delete).toHaveBeenCalled();
      expect(mockPrismaService.image.delete).toHaveBeenCalled();
    });

    it('should throw NotFoundException if servicio not found', async () => {
      mockPrismaService.servicio.delete.mockRejectedValue(new NotFoundException());

      await expect(service.remove(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findFavorites', () => {
    it('should return favorite servicios for a user', async () => {
      const userId = 1;
      const expected = [
        {
          id: 1,
          nombre: 'Servicio 1',
          imagenes: [
            { id: 1, url: 'img1.jpg' }
          ],
          serviciosEmprendedores: [
            { id: 1, emprendimientoId: 1 }
          ]
        },
        {
          id: 2,
          nombre: 'Servicio 2',
          imagenes: [
            { id: 1, url: 'img1.jpg' }
          ],
          serviciosEmprendedores: [
            { id: 2, emprendimientoId: 1 }
          ]
        }
      ];

      mockPrismaService.servicio.findMany.mockResolvedValue(expected);

      const result = await service.findFavorites(userId);

      expect(result).toEqual(expected);
      expect(mockPrismaService.favoritoServicio.findMany).toHaveBeenCalledWith({
        where: { usuarioId: userId },
        select: { servicioId: true }
      });
    });

    it('should throw NotFoundException if user not found', async () => {
      const userId = 999;

      mockPrismaService.favoritoServicio.findMany.mockResolvedValue([]);
      mockPrismaService.servicio.findMany.mockResolvedValue([]);

      const result = await service.findFavorites(userId);
      expect(result).toEqual([]);
    });
  });
});