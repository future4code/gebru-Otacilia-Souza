
import { LinkedList, NodeItem } from "./ListNode";

const node = new NodeItem("Otacilia");
const list = new LinkedList(node)

list.add("Ana");
list.add("Cris");
list.add("Vivia");
console.log(list);
console.log(list.find("Milena"))