import {Item} from './item';
import {Injectable} from "@angular/core";

@Injectable()
export class CopyPasterService {
	private _items: Item[];

	constructor( ) {
		this._items = [];
		this._items[0] = new Item(0);
	}

	public get items(): Item[] {
		return this._items;
	}

	public addItem(): void {
		let index: number  = this.items.length;
		this.items.push(new Item(index));
	}

	public removeItem(item: Item): void {
		const index = this.items.indexOf(item);
		this.items.splice(index, 1);
	}
}
