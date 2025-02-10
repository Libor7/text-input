/** CUSTOM COMPONENTS */
import TextInput from "@src/components/UI/text-input/TextInput";

const DUMMY_VALIDATION_HANDLERS = [
  (value: string) => value.length > 4,
  (value: string) => value.length < 11,
  (value: string) => /[A-Z]/.test(value),
];

const App = () => <TextInput handlers={DUMMY_VALIDATION_HANDLERS} />;

export default App;
