pipeline {
    agent any

    tools {
        nodejs "NODEJS_HOME" // Asegúrate de tener Node.js configurado con este nombre en Jenkins
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

        stage('Build') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    sh 'npm run test'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                timeout(time: 4, unit: 'MINUTES') {
                    withSonarQubeEnv('sonarqube') {
                        sh 'npm run sonar' // Asegúrate de tener este script en tu package.json
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

        stage('Deploy') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    sh 'npm run start:prod' // Asegúrate de que esté configurado correctamente
                }
            }
        }
    }
}
