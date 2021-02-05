pipeline {
    agent { dockerfile true }
    // environment {
    //     HOME = '.'
    // }
    stages {
        stage('install node modules') {
            steps {
                sh 'npm --prefix /home/node install /home/node'
            }
        }
        stage('run node app') {
            steps {
                sh 'npm --prefix /home/node start /home/node'
            }
        }
    }
}