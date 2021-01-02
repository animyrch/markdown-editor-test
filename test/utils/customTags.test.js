import { replaceTags } from '../../src/utils/customTags';


describe('replaceTags', () => {
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
    it('can replace all self-closing img tags with relevant html markup', () => {
        const inputText = '[img="https://picsum.photos/2000"][img="https://picsum.photos/200"]';
        const expectedMarkupStart = '<img src="https://picsum.photos/2000" alt=""><img src="https://picsum.photos/200" alt="">';
        const replacement = replaceTags(inputText);
        expect(replacement).toBe(expectedMarkupStart);
    });
    it('can replace all self-closing video tags with relevant html markup', () => {
        const inputText = '[video="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"][video="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"]';
        const expectedMarkupStart = '<video controls width="250"><source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4">Sorry, your browser doesn\'t support embedded videos.</video><video controls width="250"><source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4">Sorry, your browser doesn\'t support embedded videos.</video>';
        const replacement = replaceTags(inputText);
        expect(replacement).toBe(expectedMarkupStart);
    });
});