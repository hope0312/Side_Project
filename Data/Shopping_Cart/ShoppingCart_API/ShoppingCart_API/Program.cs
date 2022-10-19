// 建立 WebApplicationBuilder 物件
var builder = WebApplication.CreateBuilder(args);

// 透過 builder.Services 將服務加入 DI 容器

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 建立 WebApplication 物件
var app = builder.Build();

// 透過 app 設定 Middlewares (HTTP request pipeline)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// 啟動 ASP.NET Core 應用程式
app.Run();
