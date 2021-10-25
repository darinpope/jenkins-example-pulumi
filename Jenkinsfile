pipeline {
  agent any
  environment {
    PULUMI_ACCESS_TOKEN = credentials('pulumi-access-token')
  }
  stages {
    stage('up') {
      steps {
        sh '''
           env | sort
           # pulumi stack select ${}
        '''
      }
    }
  }
}