import { Base } from "./base";
import { Posts } from "./post";
import { applyMixins } from "./utils";

class Typicode extends Base {}
interface Typicode extends Posts {}

applyMixins(Typicode, [Posts]);

export default Typicode;
