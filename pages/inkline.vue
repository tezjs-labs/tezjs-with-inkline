<script >
  export default {
    layoutName: "default",
    head: {
      title: "tezjs: starter vue project"
    },
    data() {
      return {
        input: "",
        textarea: "",
        select: null,
        options: [
          { id: 1, label: "Option A" },
          { id: 2, label: "Option B" },
          { id: 3, label: "Option C" }
        ],
        checkboxGroup: ["apple"],
        radioGroup: "coconut",
        checkbox: true,
        toggle: true,
        loading: false
      };
    },
    methods: {
      onSubmit() {
        this.loading = true;
  
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    }
  };
  </script>
      <template>
    <i-layout class="_margin-x:auto" style="max-width:80rem; border:none;">
      <i-row>
        <i-column class="_md:visible" md="3">
          <i-sidebar id="sidebar">
            <i-list-group class="_padding:2 _font-size:xl _font-weight:semibold _background:light">
              <i-list-group-item>
                <a href="#home">Home</a>
              </i-list-group-item>
              <i-list-group-item>
                <a href="#about">About</a>
              </i-list-group-item>
              <i-list-group-item>
                <a href="#table">Table</a>
              </i-list-group-item>
              <i-list-group-item>
                <a href="#form">Form</a>
              </i-list-group-item>
              <!-- <i-list-group-item>Disabled</i-list-group-item> -->
            </i-list-group>
          </i-sidebar>
        </i-column>
        <i-column lg="9" md="12">
          <i-layout-content class="_padding-x:1 _margin-y:10">
            <i-container fluid class="_margin-bottom:8">
              <section id="home">
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ut a dolorem quasi distinctio dicta sunt aperiam accusamus id tempora dignissimos quisquam nihil sed veniam! Consectetur ullam magnam corporis nulla?</p>
              </section>
              <section id="about">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum explicabo laudantium corrupti ex optio quaerat nihil. Impedit sed eum, in nihil nulla unde voluptatibus aperiam et, aspernatur neque eius minima.</p>
              </section>
              <section id="table">
                <h1>Table</h1>
                <i-table hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">#</th>
                      <td>Alex</td>
                      <td>Grozav</td>
                      <td>@alexgrozav</td>
                    </tr>
                    <tr>
                      <th scope="row">#</th>
                      <td>John</td>
                      <td>Doe</td>
                      <td>@johndoe</td>
                    </tr>
                    <tr>
                      <th scope="row">#</th>
                      <td>Alice</td>
                      <td>Doe</td>
                      <td>@alicecooper</td>
                    </tr>
                  </tbody>
                </i-table>
              </section>
              <section id="form">
                <h1>Form</h1>
                <i-form @submit="onSubmit" size="md">
                  <i-form-group>
                    <i-form-label>Input</i-form-label>
                    <i-input v-model="input" placeholder="Type something.." />
                  </i-form-group>
  
                  <i-form-group>
                    <i-form-label>Textarea</i-form-label>
                    <i-textarea v-model="textarea" placeholder="Write a comment.." />
                  </i-form-group>
  
                  <i-form-group>
                    <i-form-label>Select</i-form-label>
                    <i-select v-model="select" :options="options" placeholder="Choose an option" />
                  </i-form-group>
  
                  <i-form-group>
                    <i-form-label>Checkbox Group</i-form-label>
                    <i-checkbox-group v-model="checkboxGroup">
                      <i-checkbox value="apple">Apple</i-checkbox>
                      <i-checkbox value="banana">Banana</i-checkbox>
                      <i-checkbox value="strawberry">Strawberry</i-checkbox>
                      <i-checkbox value="mango">Mango</i-checkbox>
                    </i-checkbox-group>
                  </i-form-group>
  
                  <i-form-group>
                    <i-form-label>Radio Group</i-form-label>
                    <i-radio-group v-model="radioGroup">
                      <i-radio value="coconut">Coconut</i-radio>
                      <i-radio value="passionfruit">Passion fruit</i-radio>
                      <i-radio value="apricot">Apricot</i-radio>
                    </i-radio-group>
                  </i-form-group>
  
                  <i-form-group>
                    <i-form-label>Toggle</i-form-label>
                    <i-toggle v-model="toggle">I confirm this toggle</i-toggle>
                  </i-form-group>
  
                  <i-form-group>
                    <i-form-label>Checkbox</i-form-label>
                    <i-checkbox v-model="checkbox">I accept the terms and conditions</i-checkbox>
                  </i-form-group>
  
                  <i-form-group>
                    <i-button type="submit" :loading="loading">Submit</i-button>
                  </i-form-group>
                </i-form>
              </section>
            </i-container>
          </i-layout-content>
        </i-column>
      </i-row>
    </i-layout>
  </template>