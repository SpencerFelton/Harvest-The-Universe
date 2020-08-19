class Resource{
  constructor(id, name, hp, defence, reward, url){
    this.id = id;
    this.name = name;
    this.maxHp = hp;
    this.currentHp = hp;
    this.defence = defence;
    this.reward = reward;
    this.url = url;
    this.killed = false;
  }

  hpPercent(){
    return (this.currentHp/this.maxHp) * 100;
  }

  spawn(){
    this.currentHp = this.maxHp;
  }

  die(player){
    player.setMoney(player.getMoney()+this.reward);
    if(!this.killed){
      this.killed = true;
    }
  }

  setHp(damage){
    damage -= this.defence;
    if(damage <= 0){
      damage = 0;
    }
    this.currentHp -= damage;
    if(this.currentHp <= 0){
      this.currentHp = this.maxHp;
      this.die(player);
    }
  }
}
