import { render } from "@testing-library/react-native"
import Button from "./Button"

test("should match with snapshot" ,  () => {
    const comp = render(<Button/>) //icine sorgu gonderecegiz test edilebilir yapıyı saglar
    expect(comp).toMatchSnapshot(); //snapshot a uyuşup uyuşmadığını kontrol eder
})