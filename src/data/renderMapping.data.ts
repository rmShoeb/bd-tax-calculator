import { renderIncomeTaxCalculator } from "../components/incomeTaxCalculator/incomeTaxCalculator.component";

export const RENDER_MAPPER: Map<string, string> = new Map<string, string>([
    ["income-tax-calculator", renderIncomeTaxCalculator()],
    ["other", "There are no other features yet. You have idea on what new features I can add? Let me know! Or better yet, send a PR :)"],
]);