class Fruit {
  private _name: string = '';
  private _genus: string = '';
  private _family: string = '';
  private _order: string = '';
  private _calories: number = NaN;
  private _proteins: number = NaN;
  private _carbohydrates: number = NaN;
  private _fat: number = NaN;
  private _sugar: number = NaN;

  constructor(object: any) {
    const { name, genus, family, order, nutritions: { calories, protein, carbohydrates, fat, sugar } } = object;
    this.name = name;
    this.genus = genus;
    this.family = family;
    this.order = order;
    this.calories = calories;
    this.proteins = protein;
    this.carbohydrates = carbohydrates;
    this.fat = fat;
    this.sugar = sugar;
  }

  public get name(): string {
    return this._name;
  }
  
  public set name(value: string) {
    this._name = value;
  }

  public get genus(): string {
    return this._genus;
  }

  public set genus(value: string) {
    this._genus = value;
  }

  public get family(): string {
    return this._family;
  }

  public set family(value: string) {
    this._family = value;
  }

  public get order(): string {
    return this._order;
  }
  
  public set order(value: string) {
    this._order = value;
  }

  public get calories(): number {
    return this._calories;
  }
  
  public set calories(value: number) {
    this._calories = value;
  }

  public get proteins(): number {
    return this._proteins;
  }
  
  public set proteins(value: number) {
    this._proteins = value;
  }

  public get carbohydrates(): number {
    return this._carbohydrates;
  }
  
  public set carbohydrates(value: number) {
    this._carbohydrates = value;
  }

  public get fat(): number {
    return this._fat;
  }
  
  public set fat(value: number) {
    this._fat = value;
  }

  public get sugar(): number {
    return this._sugar;
  }

  public set sugar(value: number) {
    this._sugar = value;
  }
}

export default Fruit;