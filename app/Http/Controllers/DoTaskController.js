import DoTaskJob from '#jobs/DoTaskJob'
import Queue from '@ioc:Kue/Queue'

export default class DoTaskController {
  async handle({ request, response }) {
    const { name } = request.only(['name'])

    await Queue.dispatch(DoTaskJob, { name }, { attempts: 3 })

    return response.ok({ message: 'Tarefa enviada para fila com sucesso.' })
  }
}