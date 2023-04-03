import { Base } from "./base";
import { Movie } from "./movie/index";
import { applyMixins } from "./utils";

class LordOfTheRingsAPI extends Base {}
interface LordOfTheRingsAPI extends Movie {}

applyMixins(LordOfTheRingsAPI, [Movie]);

export default LordOfTheRingsAPI;
