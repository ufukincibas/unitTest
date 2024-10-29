import { render , fireEvent } from "@testing-library/react-native"
import Button from "./Button"


test("should match with snapshot" ,  () => {
    const comp = render(<Button />) //icine sorgu gonderecegiz test edilebilir yapıyı saglar
    expect(comp).toMatchSnapshot();//snapshot a uyuşup uyuşmadığını kontrol eder
});

test("check number" , () => {
    expect(5+6).toBe(11)  //5+6 nın 11 olmasını bekliyorum gibi bir kullanımı  var
});

test("should render title correctly" , () => {
    const testTitle = "test"
    const comp = render(<Button title={testTitle}/>) 

    const buttonText = comp.getByTestId("button-title").children[0]// 'button-title' id'li öğeyi buluyoruz

    expect(buttonText).toBe(testTitle) //title gonderince render oluyor mu kontrolu
})

test("should triger onPress correctly" , () => {
    const onClickFunction = jest.fn(); //jestin sagladıgı ozel bir func tetiklenip tetiklenmedigini kontrol etmek icin
    const comp =render(<Button onClick={onClickFunction}/>);

    const buttonTouchable = comp.getByTestId("button-touchable"); //test id ye sahip elementi getir

    fireEvent(buttonTouchable, "press") //touchable opacity i yakala press event ini tetikle
   
    expect(onClickFunction).toBeCalled();
})