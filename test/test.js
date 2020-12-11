var TodoList = artifacts.require("TodoList");

contract("TodoList", async (accounts) => {
  it("Checking Task", async () => {
    let instance = await TodoList.deployed();

    let task = "reading";
    instance.createTask(task, { from: accounts[0] });

    let _id = await instance.taskCount.call();
    let returenedValue = await instance.getTask(_id);

    assert.equal(
      "hjadhjsja",
      returenedValue,
      "Test failed, value was not same"
    );
  });
});
