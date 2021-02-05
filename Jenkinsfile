pipeline {
    agent { dockerfile true }
    // environment {
    //     HOME = '.'
    // }
    stages {
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