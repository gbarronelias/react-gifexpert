import { render } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('should testing GifItem', () => {

    const title = 'Saitama';
    const url   = 'http://one-punch.com/saitama.jpg'


    test('should match snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
    });
});