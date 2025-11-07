pipeline{
    agent any
    stages{
        stage("Checkout code"){
            steps{
                git branch: 'main', url: 'https://github.com/EssTee4/practicedevops/'
            }
        }
        stage("build"){
            steps{
                sh 'echo "building"'
        }
    }
    }
    post{
        success{
            sh 'echo "built sucessfull"'
        }
        failure{
            sh 'echo "built failed"'
        }
    }
}
