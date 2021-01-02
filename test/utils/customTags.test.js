import { replaceTags } from '../../src/utils/customTags';


describe('replaceTags', () => {
    // let replacement = 'text before table [table] [table-row] text inside row 1 [/table-row] [table-row] text inside row 2 [/table-row] [/table] text after table';

    it('can replace table tag with relevant html markup', () => {
        const inputText = '[table]table[/table]';
        const expectedMarkupStart = '<table><tbody>table</tbody></table>';
        const replacement = replaceTags(inputText);
        expect(replacement).toBe(expectedMarkupStart);
    });
    it('can replace row tag with relevant html markup', () => {
        const inputText = '[row]row[/row]';
        const expectedMarkupStart = '<tr><td>row</td></tr>';
        const replacement = replaceTags(inputText);
        expect(replacement).toBe(expectedMarkupStart);
    });
    it('can replace col-left tag with relevant html markup', () => {
        const inputText = '[col-left]column left[/col-left][col-right]column right[/col-right]';
        const expectedMarkupStart = '<div style="width: 50%;display: inline-block;">column left</div><div style="width: 50%;display: inline-block;">column right</div>';
        const replacement = replaceTags(inputText);
        expect(replacement).toBe(expectedMarkupStart);
    });
});