import ItemList from "../src/models/ItemList";

test("Must add an item to array with correct priority", () => {
  const initalState = {
    item: "Write code!",
    priority: 1,
    status: "Doing okay but make-up for the 2-week long Saturday"
  };
  const TestList = ItemList.add(initalState);
  expect(TestList[0].priority.toBeLessThanOrEqual(3));
});
