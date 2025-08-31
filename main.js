import QuestGenerator from "./QuestGenerator.js";
import { rewards, quests, challenges } from "./data.js";
const questGenerator = new QuestGenerator(quests, challenges, rewards);
const { reward, quest, challenge } = questGenerator.generateQuest();
console.log(
  `🗡️ Quest: ${quest}\n⚔️ Challenge: ${challenge}\n🏆 Reward: ${reward}`
);
