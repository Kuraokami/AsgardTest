pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'mvn compile'
      }
    }
    stage('Test') {
      steps {
        parallel(
          "Test": {
            sh 'mvn test'
            
          },
          "Integration Test": {
            sh 'mvn test -Dpor'
            
          }
        )
      }
    }
    stage('Deploy') {
      steps {
        sh 'nanana'
      }
    }
  }
}