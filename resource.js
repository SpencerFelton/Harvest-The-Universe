class Resource{
  constructor(hp, defence, reward, url){
    this.maxHp = hp;
    this.currentHp = hp;
    this.defence = defence;
    this.reward = reward;
    this.url = url;
  }

   hpPercent(){
    return (this.currentHp/this.maxHp) * 100;
  }

  die(player){
    player.setMoney(player.getMoney()+this.reward);
  }

  setHp(damage){
    this.currentHp -= damage;
    if(this.currentHp <= 0){
      this.currentHp = this.maxHp;
      this.die(player);
    }
  }
}
