/**
 * @jest-environment node
 */

const { pactWith } = require("jest-pact")
const { Matchers } = require("@pact-foundation/pact")
const { string } = Matchers
const { getMyCourses } = require("./course.api")

const port = 8993

pactWith(
    { consumer: "Student", provider: "Course_API", port: port },
    provider => {
        describe("Learning platform", () => {
            let url = "http://localhost"

            const EXPECTED_BODY = {
                "courses":
                    [{
                        "_id": string("123"),
                        "name": string("end-to-end"),
                        "author": string("lewis prescott")
                    }]
            }

            beforeEach(() => {
                const interaction = {
                    uponReceiving: "get request for courses",
                    withRequest: {
                        method: "GET",
                        path: "/courses",
                        headers: {
                            "Accept": "application/json",
                            "Authorization": "Bearer 123"
                        },
                    },
                    willRespondWith: {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: EXPECTED_BODY,
                    },
                }
                return provider.addInteraction(interaction)
            })

            it("returns the correct response", () => {
                const endpoint = {
                    url: url,
                    port: port,
                    token: "123"
                }
                return getMyCourses(endpoint).then(response => {
                    expect(response.data.courses).toBeInstanceOf(Array)
                })
            })
        })
    })
