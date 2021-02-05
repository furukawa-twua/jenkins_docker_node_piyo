pipeline {
    agent { dockerfile true }
    environment {
        HOME = '.'
    }
    stages {
        stage('install node modules') {
            steps {
                sh 'npm --prefix ./var/lib/jenkins/workspace/kbc17a19-asgn/ install ./var/lib/jenkins/workspace/kbc17a19-asgn/'
            }
        }
        stage('run node app') {
            steps {
                sh 'npm --prefix ./var/lib/jenkins/workspace/kbc17a19-asgn/ start ./var/lib/jenkins/workspace/kbc17a19-asgn/'
            }
        }
    }
}