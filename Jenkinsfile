pipeline {
  agent any
  stages {
    stage('Build'){
      steps{
        echo 'Building'
        npm run build
      }
    }
    stage('Test'){
      steps{
        echo 'Testing'
        npm run test
      }
    }
    stage('Deploy'){
      steps{
        echo 'Deploying'
      }
    }
  }
}
