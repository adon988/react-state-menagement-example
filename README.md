Here is a React cross component state management example, we using react useContext and jotai to implement the cross component state transfer.

### About React Context Provider Hell

We know the react context has a problem of provider hell, it will let us confusing and cause anti-pattern.

```js
<AppContextProvider>
  <AnotherProvider>
    <AgainAnotherProvider>
      <TestProvider>
        <FooProvider>
          <BarProvider>
            <BazProvider>
              <BatProvider>
                <App />
              </BatProvider>
            </BazProvider>
          </BarProvider>
        </FooProvider>
      </TestProvider>
    </AgainAnotherProvider>
  </AnotherProvider>
</AppContextProvider>;
```

### How Jotai work?

The Jotai state management library is a useState liked tool, that can without provider and easy to used.

So in this example we will create a count example to compare two data transfer methods.

### References

Jotai introduction:
https://jotai.org/docs/introduction

Reack hooks useContext:
https://reactjs.org/docs/hooks-reference.html#usecontext


### extend more
React-Query 
SWR