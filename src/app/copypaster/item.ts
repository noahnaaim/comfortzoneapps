export class Item {
	public label: string;
	public placeHolder: string;
	public index: number;
	public isCopied: boolean;
	public targetId: string;

	constructor(index: number) {
		this.index = index;
		this.targetId = "text" + index;
		this.isCopied = false;
		this.label     = 'Paster #' + this.index+1;
		this.placeHolder = index > 0 ? 'Paste more stuff here' : 'Paste your stuff here';
	}
}
