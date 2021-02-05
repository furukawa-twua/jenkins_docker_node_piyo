pipeline {
    agent { dockerfile true }
    // environment {
    //     HOME = '.'
    // }
    stages {
        stage('test') {
            steps {
                sh 'sudo chown -R 995:991 "/.npm"'
            }
        }
        stage('install node modules') {
            steps {
                sh 'npm --prefix ~/ install ~/'
            }
        }
        stage('run node app') {
            steps {
                sh 'npm --prefix ~/ start ~/'
            }
        }
    }
}