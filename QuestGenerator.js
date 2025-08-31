export default class QuestGenerator {
  constructor(quests, challenges, rewards) {
    this._quests = quests;
    this._challenges = challenges;
    this._rewards = rewards;
  }

  get quests() {
    return this._quests;
  }

  set quests(val) {
    return (this._quests = val);
  }

  get challenges() {
    return this._challenges;
  }

  set challenges(val) {
    return (this._challenges = val);
  }

  get rewards() {
    return this._rewards;
  }

  set rewards(val) {
    return (this._rewards = val);
  }

  getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  generateQuest() {
    const quest = getRandomElement(this._quests);
    const challenge = getRandomElement(this._challenges);
    const reward = getRandomElement(this._rewards);

    return {
      quest,
      challenge,
      reward,
    };
  }
}
