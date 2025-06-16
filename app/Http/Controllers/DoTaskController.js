export default async (request, response) => {
    const name = request.body.name;
    await timerBySecond(10);
    return response.status(CONSTANTS.HTTP.SUCCESS).json({ success: "Tarefa Concluída" });
}