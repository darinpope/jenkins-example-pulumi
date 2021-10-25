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
           echo ${GIT_BRANCH:6}
           # pulumi stack select ${}
        '''
      }
    }
  }
}