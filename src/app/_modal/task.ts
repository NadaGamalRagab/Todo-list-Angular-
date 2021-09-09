import { CATEGORY_TYPE } from "./category";

export interface Task {
	id?:number,
	title: string,
	description?: string,
	creationDate: Date,
	completed?: boolean,
	category?: CATEGORY_TYPE    
}