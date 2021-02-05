pipeline {
    agent { dockerfile true }
    // environment {
    //     HOME = '.'
    // }
    stages {
        stage('install node modules') {
            steps {
                dir('/home/node/') {
                    sh 'npm install'
                }
            }
        }
        stage('run node app') {
            steps {
                dir('/home/node/') {
                    sh 'npm start'
                }
            }
        }
    }
}