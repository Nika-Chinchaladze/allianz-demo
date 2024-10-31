pipeline {
    agent any
    environment {
        CI = 'true'
        MY_USER_NAME = 'altair'
        MY_PASS_WORD = '123123'
        DEV_BASE_URL = 'https://altair-dev.allianz-partners.com/claims'
        API_BASE_URL = 'https://qa-allianz-partners.apis.allianz.com'
        POLICY_ID = 'QNL4084D1GQ39'
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
}
