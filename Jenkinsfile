pipeline {
    agent any
    environment {
        CI = 'true'
        MY_USER_NAME = credentials('MY_USER_NAME')
        MY_PASS_WORD = credentials('MY_PASS_WORD')
        DEV_BASE_URL = credentials('DEV_BASE_URL')
        API_BASE_URL = credentials('API_BASE_URL')
        POLICY_ID = credentials('POLICY_ID')
        ENV = 'dev'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
            }
        }
        stage('Run E2E Tests') {
            steps {
                bat 'npx playwright test'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
                }
            }
        }
    }
    post {
        always {
            node {
                cleanWs()
            }
        }
    }
}
