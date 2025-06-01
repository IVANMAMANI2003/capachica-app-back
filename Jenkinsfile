pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    tools {
        nodejs "NODEJS_HOME" // Asegúrate de tener este NodeJS instalado en Jenkins
    }

    stages {
        stage('Clone') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    git branch: 'main', credentialsId: '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', url: 'https://github.com/IVANMAMANI2003/capachica-app-back.git'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    sh 'npm install'
                }
            }
        }

        stage('Lint') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    sh 'npm run lint'
                }
            }
        }

        stage('Test') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    sh 'npm run test:cov' // genera cobertura con Jest
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                timeout(time: 4, unit: 'MINUTES') {
                    withSonarQubeEnv('sonarqube') {
                        sh "sonar-scanner \
                            -Dsonar.projectKey=capachica-app-back \
                            -Dsonar.sources=src \
                            -Dsonar.tests=src \
                            -Dsonar.inclusions=src/**/*.ts \
                            -Dsonar.test.inclusions=**/*.spec.ts \
                            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info"
                    }
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 4, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    // Aquí puedes hacer el deploy (ej. PM2, Docker, etc.)
                    echo 'Desplegando aplicación NestJS...'
                    // sh 'npm run start:prod'
                }
            }
        }
    }
}
