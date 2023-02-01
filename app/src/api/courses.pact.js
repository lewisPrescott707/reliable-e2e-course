/**
 * @jest-environment node
 */

const { pactWith } = require("jest-pact")
const { Matchers } = require("@pact-foundation/pact")
const { string } = Matchers
const { getMyCourses } = require("./course.api")

const port = 8993

pactWith(
    { consumer: "", provider: "", port: port },
    provider => {
        describe("Learning platform", () => {
            let url = ""

            const EXPECTED_BODY = {}

            beforeEach(() => {
                const interaction = {
                    uponReceiving: "",
                    withRequest: {
                        method: "",
                        path: "",
                        headers: {},
                    },
                    willRespondWith: {
                        status: 0,
                        headers: {},
                        body: EXPECTED_BODY,
                    },
                }
                return provider.addInteraction(interaction)
            })

            it("returns the correct response", () => {
                const endpoint = {}
                return getMyCourses(endpoint).then(response => {
                    expect().toBeInstanceOf()
                })
            })
        })
    })
