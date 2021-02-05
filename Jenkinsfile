pipeline {
    agent { dockerfile true }
    // environment {
    //     HOME = '.'
    // }
    stages {
        // stage('install node modules') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }
        stage('run node app') {
            steps {
                // sh 'npm start'
                sh 'node /app.js'
            }
        }
    }
}