export default class DoTaskJob {
  static get queue() {
    return 'do-task-queue'
  }

  async handle({ data }) {
    const { name } = data

    console.log(`Iniciando tarefa para: ${name}`)

    // Simula tarefa demorada (10s)
    await new Promise(resolve => setTimeout(resolve, 10000))

    console.log(`Tarefa finalizada para: ${name}`)
  }
}

/*
Para subir o worker com 3 jobs ao mesmo tempo, execute:

node worker.js
*/