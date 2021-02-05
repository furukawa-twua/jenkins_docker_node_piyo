pipeline {
    agent { dockerfile true }
    // environment {
    //     HOME = '.'
    // }
    stages {
        stage('test') {
            steps {
                // sh 'chown -R 995:991 "/.npm"'
                sh 'test -e /.dockerenv'
            }
        }
        stage('install node modules') {
            steps {
                sh 'npm --prefix / install /'
            }
        }
        stage('run node app') {
            steps {
                sh 'npm --prefix / start /'
            }
        }
    }
}