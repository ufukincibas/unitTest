import { render , fireEvent } from "@testing-library/react-native"
import Button from "./Button"
import styles from "./Button.styles"

//snapshot testing
test("should match with snapshot" ,  () => {
    const comp = render(<Button />) //icine sorgu gonderecegiz test edilebilir yapıyı saglar
    expect(comp).toMatchSnapshot();//snapshot a uyuşup uyuşmadığını kontrol eder
});


//basic expect().toBe() structure
test("check number" , () => {
    expect(5+6).toBe(11)  //5+6 nın 11 olmasını bekliyorum gibi bir kullanımı  var
});


 //Title Testing
test("should render title correctly" , () => {
    const testTitle = "test"
    const comp = render(<Button title={testTitle}/>) 

    const buttonText = comp.getByTestId("button-title").children[0]// 'button-title' id'li öğeyi buluyoruz

    expect(buttonText).toBe(testTitle) //title gonderince render oluyor mu kontrolu
})

//onPress Testing

test("should triger onPress correctly" , () => {
    const onClickFunction = jest.fn(); //jestin sagladıgı ozel bir func tetiklenip tetiklenmedigini kontrol etmek icin
    const comp =render(<Button onClick={onClickFunction}/>);

    const buttonTouchable = comp.getByTestId("button-touchable"); //test id ye sahip elementi getir

    fireEvent(buttonTouchable, "press") //touchable opacity i yakala press event ini tetikle
   
    expect(onClickFunction).toBeCalled();
})

 //Style Testing
test("should render default given theme style" , () => {
    
    const comp = render(<Button />)

    const buttonStyle = comp.getByTestId("button-touchable").props.style;

    expect(buttonStyle).toMatchObject(styles.PRİMARY.container)
   
} )

    //Style Testing
test("should render given theme style" , () => {
    const selectedTheme = "SECONDARY"
    const comp = render(<Button theme={selectedTheme}/>)

    const buttonStyle = comp.getByTestId("button-touchable").props.style;

    expect(buttonStyle).toMatchObject(styles[selectedTheme].container)
  
} )