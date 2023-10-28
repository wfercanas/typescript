// interface
interface Player {
  name: string;
  id: number;
}

const player: Player = {
  name: "Hayes",
  id: 0,
};

class PlayerAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const bot: Player = new PlayerAccount("Murphy", 1);
