pipeline {
  agent any
  tools {
    nodejs 'Node 6.x'
  }
  stages {
    stage('Build'){
      steps{
        sh 'echo Building....'
        sh 'npm build'
      }
    }
    stage('Test'){
      steps{
        sh 'echo Testing....'
        sh 'npm test'
      }
    }
    stage('Deploy'){
      steps{
      sh 'echo Deploying....'
      }
    }
  }
}
