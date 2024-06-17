import { Genre } from '@prisma/client'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

interface getTicketBuyEmailMessageParams {
  ticketId: number
  title: string
  genres: Genre[]
  cinemaTitle: string
  rating: string
  year: number
  sessionTimeStart: Date
  userFullName: string
  cinemaHall: string
  adress: string
  placeCode: string
  cost: number
}

export function getTicketBuyEmailMessage(body: getTicketBuyEmailMessageParams) {
  return `
<article class="MessageViewerLayout__body--XiCNR js-message-body Theme Theme_root_ps-light Theme_color_ps-light" style="max-width: 577px">
  <div class="MessageBody_body_pmf3j react-message-wrapper__body">
    <div style="margin: 0">
      <div style="table-layout: fixed; width: 100%">
        <div style="background: #fafafa; font-size: 10px; width: 100%">
          <div
            style="
              background: #fff;
              border-radius: 1em;
              font-family: 'arial', 'helvetica', sans-serif;
              margin: 2em;
              max-width: 600px;
              width: 100%;
            "
          >
            <div style="padding: 2em; text-align: left">
              <div style="font-size: 3.2em">${body.title}</div>
              <div style="font-size: 1em; line-height: 1.6em">
                <span
                  style="
                    background: darkred;
                    color: white;
                    margin: 0 0.5em 0 0;
                    padding: 0.3em;
                  "
                  >${body.rating}</span
                >${body.year}, Россия, ${body.genres
                  .map((g) => g.name)
                  .join(', ')}
              </div>
            </div>
            <table
              style="
                background-color: #63a814;
                color: white;
                padding: 1em 2em 1em 2em;
                width: 100%;
              "
            >
              <tbody>
                <tr>
                  <td style="width: 25%">
                    <span style="font-size: 5.5em; line-height: 1; padding-right: 0.3ch"
                      >${format(body.sessionTimeStart, 'HH:mm', {
                        locale: ru,
                      })}</span
                    >
                  </td>
                  <td style="width: 75%">
                    <table
                      style="padding-bottom: 1em; white-space: nowrap; width: 100%"
                    >
                      <tbody>
                        <tr>
                          <td style="padding-top: 10px; width: 30%">
                            <span style="font-size: 2em; line-height: 1.1em"
                              >${format(body.sessionTimeStart, 'd MMMM', {
                                locale: ru,
                              })}</span
                            >
                          </td>
                          <td
                            rowspan="4"
                            style="
                              text-align: right;
                              vertical-align: bottom;
                              width: 70%;
                            "
                          >
                            <span style="color: #add183; font-size: 3em">Оплачено</span>
                          </td>
                        </tr>
                        <tr>
                          <td><span style="font-size: 1.5em">${format(
                            new Date(body.sessionTimeStart),
                            'EEEE',
                            { locale: ru },
                          )}</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style="padding: 2em; text-align: left">
              <div style="font-size: 4.2em">Код продажи ${body.ticketId}</div>
            </div>
            <div style="background: #f6f6f6; padding: 2em; text-align: left">
              <div style="font-size: 2.4em">«${body.cinemaTitle}»</div>
              <div style="color: #707070; font-size: 1.2em; line-height: 2em">
                ${body.adress}
              </div>
            </div>
            <div>
              <div
                style="
                  border-bottom-color: #f1f1f1;
                  border-bottom-style: solid;
                  border-bottom-width: 0.1em;
                  padding: 2em;
                  text-align: left;
                "
              >
                <div style="font-size: 2.4em">${body.userFullName}</div>
              </div>
              <div
                style="
                  border-bottom-color: #f1f1f1;
                  border-bottom-style: solid;
                  border-bottom-width: 0.1em;
                  padding: 2em;
                  text-align: left;
                "
              >
                <div style="font-size: 3.6em">${body.cinemaHall}</div>
              </div>
              <table
                style="
                  border-bottom-color: #f1f1f1;
                  border-bottom-style: dashed;
                  border-bottom-width: 1px;
                  padding: 1em 2em 1em 2em;
                  width: 100%;
                "
              >
                <tbody>
                  <tr>
                    <td>
                      <span
                        style="background: white; font-size: 2em; padding-right: 0.5em"
                        >${body.placeCode[0]} ряд, ${body.placeCode.slice(
                          1,
                        )} место</span
                      >
                    </td>
                    <td style="text-align: right">
                      <span
                        style="background: white; font-size: 2em; padding-left: 0.5em"
                        >${body.cost}&thinsp;₽</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="width: 100%">
                <tbody>
                  <tr>
                    <td style="padding: 2em; width: 50%">
                      <span style="font-size: 3.6em">Всего</span>
                    </td>
                    <td style="padding: 2em; text-align: right; width: 50%">
                      <span style="font-size: 3.6em; white-space: nowrap"
                        >${body.cost}&thinsp;₽</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <table style="padding: 2em; text-align: center; width: 100%">
              <tbody>
                <tr>
                  <td>
                    <img
                      alt="147617"
                      src="[0]"
                      style="width: 25em"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style="
                border-top-color: #f1f1f1;
                border-top-style: solid;
                border-top-width: 0.1em;
                padding: 1em 2em 1em 2em;
                width: 100%;
              "
            >
              <tbody>
              <!-- <tr>
                  <td>
                    <span style="background: white; font-size: 2em"
                      ><a
                        href="[1]"
                        data-link-id="3"
                        target="_blank"
                        rel="noopener noreferrer"
                        >Возврат билетов</a
                      ></span
                    >
                  </td>
                </tr> -->
              </tbody>
            </table>
            <!-- <div style="background: #f6f6f6; padding: 2em; text-align: left">
              <div style="color: #707070; font-size: 1.2em; line-height: 1.6em">
                ПУ <span class="wmi-callto">111010224</span>
              </div>
              <div style="color: #707070; font-size: 1.2em; line-height: 1.6em">
                В рамках программы ПУШКИНСКАЯ КАРТА
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div> 
  </div>
</article>  
`
}
