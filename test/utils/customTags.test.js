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
        const expectedMarkupStart = '<div class="md-column">column left</div><div class="md-column">column right</div>';
        const replacement = replaceTags(inputText);
        expect(replacement).toBe(expectedMarkupStart);
    });
    it('can replace desc tag with relevant html markup', () => {
        const inputText = '[desc]content[/desc][desc]content[/desc]';
        const expectedMarkupStart = '<p class="md-description">content</p><p class="md-description">content</p>';
        const replacement = replaceTags(inputText);
        expect(replacement).toBe(expectedMarkupStart);
    });
    it('can replace all self-closing img tags with relevant html markup', () => {
        const inputText = '[img=&quot;https://picsum.photos/2000&quot;][img=&quot;https://picsum.photos/200&quot;]';
        const expectedMarkupStart = '<img src="https://picsum.photos/2000" alt=""><img src="https://picsum.photos/200" alt="">';
        const replacement = replaceTags(inputText);
        expect(replacement).toBe(expectedMarkupStart);
    });
    it('can replace all self-closing video tags with relevant html markup', () => {
        const inputText = '[video=&quot;https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4&quot;][video=&quot;https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4&quot;]';
        const expectedMarkupStart = '<video controls><source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4">Sorry, your browser doesn\'t support embedded videos.</video><video controls><source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4" type="video/mp4">Sorry, your browser doesn\'t support embedded videos.</video>';
        const replacement = replaceTags(inputText);
        expect(replacement).toBe(expectedMarkupStart);
    });
    it('does not go into an infinite loop if self-closing is missing in a self-closing tag structure', () => {
        const inputText = '[img=&quot;https://picsum.photos/2000';
        const replacement = replaceTags(inputText);
        expect(replacement.length).not.toEqual(0);
    });
});