export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-6">Тарифы</h1>

      <div className="space-y-6">
        {/* Карточка 1 */}
        <div className="bg-black border border-red-600 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold">ТЕСТ</h2>
          <p className="text-red-500 font-bold text-2xl mt-2">от 1000$</p>
          <p className="text-gray-300 mt-2">
            Тестирование рекламных связок для любой сферы. Получите первые данные и аналитику для масштабирования.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li>✅ Анализ ниши</li>
            <li>✅ Создание 3–5 креативов</li>
            <li>✅ Запуск на 7 дней</li>
            <li>✅ Полный отчет</li>
          </ul>
          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full">
            Выбрать тариф
          </button>
        </div>

        {/* Карточка 2 */}
        <div className="bg-black border border-red-600 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold">РЕФЕРАЛЫ</h2>
          <p className="text-red-500 font-bold text-2xl mt-2">от 1500$</p>
          <p className="text-gray-300 mt-2">
            Привлечение активных лидов по вашей аффилиатной ссылке.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li>✅ Прогрев аудитории</li>
            <li>✅ Работа с инфлюенсерами</li>
            <li>✅ Оптимизация воронки</li>
            <li>✅ Еженедельная отчетность</li>
          </ul>
          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full">
            Выбрать тариф
          </button>
        </div>

        {/* Карточка 3 */}
        <div className="bg-black border border-red-600 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold">КЛИЕНТЫ</h2>
          <p className="text-red-500 font-bold text-2xl mt-2">от 1800$</p>
          <p className="text-gray-300 mt-2">
            Привлечение новых клиентов, готовых приобрести ваш товар или услугу.
          </p>
          <ul className="mt-4 text-left space-y-2">
            <li>✅ Глубокий анализ ЦА</li>
            <li>✅ Масштабирование РК</li>
            <li>✅ A/B тесты</li>
            <li>✅ Поддержка 24/7</li>
          </ul>
          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full">
            Выбрать тариф
          </button>
        </div>
      </div>
    </div>
  );
}
