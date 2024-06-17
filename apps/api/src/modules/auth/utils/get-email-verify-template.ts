export const getEmailVerifyTemplate = (body: {
  code: string;
  link: string;
}) => {
  return `
    <article style="max-width: 645px">
    <div>
      <div
        style="
          background-color: #f2f4f6;
          color: #51545e;
          font-family: 'lato', 'tahoma', sans-serif;
          height: 100%;
          margin: 0;
          width: 100% !important;
        "
      >
        <table
          cellpadding="0"
          cellspacing="0"
          width="100%"
          style="
            background-color: #f2f4f6;
            margin: 0;
            padding: 10px 0 0 0;
            width: 100%;
          "
        >
          <tbody>
            <tr>
              <td
                align="center"
                style="
                  font-family: 'lato', 'tahoma', sans-serif;
                  font-size: 16px;
                "
              >
                <table
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="margin: 0; padding: 0; width: 100%"
                >
                  <tbody>
                    <tr>
                      <td
                        width="570"
                        style="
                          font-family: 'lato', 'tahoma', sans-serif;
                          font-size: 16px;
                          margin: 0;
                          padding: 0;
                          width: 100%;
                        "
                      >
                        <table
                          align="center"
                          cellpadding="0"
                          cellspacing="0"
                          width="570"
                          style="
                            background-color: #ffffff;
                            margin: 0 auto 0 auto;
                            padding: 0;
                            width: 570px;
                          "
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  font-family: 'lato', 'tahoma', sans-serif;
                                  font-size: 16px;
                                  padding: 20px 45px 20px 45px;
                                "
                              >
                                <div>
                                  <h1
                                    style="
                                      color: #333333;
                                      font-size: 24px;
                                      font-weight: bold;
                                      margin-top: 0;
                                      text-align: left;
                                    "
                                  >
                                    Подтверждение регистрации
                                  </h1>

                                  <p
                                    style="
                                      color: #51545e;
                                      font-size: 16px;
                                      line-height: 1.625;
                                      margin: 0.4em 0 1.1875em 0;
                                    "
                                  >
                                    <a
                                      href="${body.link}"
                                      style="
                                        background-color: #3869d4;
                                        border-color: #3869d4;
                                        border-radius: 3px;
                                        border-style: solid;
                                        border-width: 10px 18px 10px 18px;
                                        box-sizing: border-box;
                                        color: #ffffff;
                                        display: inline-block;
                                        text-decoration: none;
                                      "
                                      data-link-id="4"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      >Нажмите для верификации</a
                                    >
                                  </p>

                                  <h2
                                    style="
                                      color: #333333;
                                      font-size: 20px;
                                      font-weight: bold;
                                      margin-top: 0;
                                      text-align: left;
                                    "
                                  >
                                    Или введите этот код на странице
                                  </h2>

                                  <p
                                    style="
                                      color: #51545e;
                                      font-size: 16px;
                                      line-height: 1.625;
                                      margin: 0.4em 0 1.1875em 0;
                                    "
                                  >
                                    ${body.code}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
    `;
};
