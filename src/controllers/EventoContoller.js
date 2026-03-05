const EventoModel = require('../models/EventoModel');

function index(req, res) {
    const eventos = EventoModel.listarTodos();
    res.json(eventos);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const evento = EventoModel.buscarPorId(id);

    if (!evento) {
        return res.status(404).json({ error: "Evento não encontrado" });
    }

    res.json(evento);
}

function store(req, res) {
    const { nome, descricao, data, local, capacidade } = req.body;

    // Nome e data obrigatórios
    if (!nome || !data) {
        return res.status(400).json({ error: "Nome e data são obrigatórios" });
    }

    // 1. Nome não pode ser vazio (só espaços)
    if (nome.trim() === "") {
        return res.status(400).json({ error: "Nome não pode ser vazio" });
    }

    // 2. Capacidade deve ser um número positivo (se informada)
    if (capacidade !== undefined && capacidade <= 0) {
        return res.status(400).json({ error: "Capacidade deve ser um número positivo" });
    }

    const novoEvento = EventoModel.criar({ nome, descricao, data, local, capacidade });
    res.status(201).json(novoEvento);
}

function update(req, res) {
    const id = parseInt(req.params.id);
    const eventoAtualizado = EventoModel.atualizar(id, req.body);

    if (!eventoAtualizado) {
        return res.status(404).json({ error: "Evento não encontrado" });
    }

    res.json(eventoAtualizado);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const deletado = EventoModel.deletar(id);

    if (!deletado) {
        return res.status(404).json({ error: "Evento não encontrado" });
    }

    res.status(204).send();
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};