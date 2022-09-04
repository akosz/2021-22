import { withFetch } from "./App"

const unmockedFetch = global.fetch

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve([]),
        })
})

afterAll(() => {
    global.fetch = unmockedFetch
})

// This is actual testing suite
describe('withFetch', () => {
    test('works1', async () => {
        const json = await withFetch()
        expect(Array.isArray(json)).toEqual(true)
        expect(json.length).toEqual(0)
    })

    test('works2', async () => {
        // highlight-start
        const fetchMock = jest
            .spyOn(global, 'fetch')
            .mockImplementation(() =>
                Promise.resolve({ json: () => Promise.resolve([]) })
            )
        // highlight-end

        const json = await withFetch()
        expect(fetchMock).toHaveBeenCalledWith(
            'https://jsonplaceholder.typicode.com/posts'
        )

        expect(Array.isArray(json)).toEqual(true)
        expect(json.length).toEqual(0)
    })
})