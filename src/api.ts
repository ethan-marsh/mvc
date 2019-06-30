import axios, { AxiosResponse, AxiosPromise, AxiosError } from 'axios'

type ApiResponse = AxiosResponse
type ApiPromise = AxiosPromise
type ApiError = AxiosError
type Id = number

interface ModelData {
	id?: Id
}

const baseURL = `http://localhost:${process.env.DB_PORT}/`
const api = axios.create({ baseURL })


type POST = (endpoint: string, data: ModelData) => ApiPromise
const createModel: POST = (endpoint, data) => {
	return api.post(`/${endpoint}/`, data)
}

type PUT = (endpoint: string, id: Id, data: ModelData) => ApiPromise
const updateModel: PUT = (endpoint, id, data) => {
	return api.put(`/${endpoint}/${id}`, data)
}

type GET = (endpoint: string, id: Id) => ApiPromise
const getModel: GET = async (endpoint, id) => {
	return api.get(`/${endpoint}/${id}`)
}

// API Types
export { ApiResponse, ApiPromise, ApiError }

// API Functions
export { createModel, updateModel, getModel }